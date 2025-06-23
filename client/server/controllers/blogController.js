import fs from 'fs'
import imagekit from '../configs/imageKit.js';
import Blog from '../models/Blog.js';
import Comment from '../models/Comment.js';
import main from '../configs/gemini.js';

export const addBlog=async(req,res)=>{
    try{
        const {title,subTitle,description,category,isPublished}=JSON.parse(req.body.blog);
        const imageFile=req.file;

        //check if all fields are oresent
        if(!title||!description||!category||!imageFile){
            return res.json({success:false,message:"Missing required fields"})
        }

        const fileBuffer=fs.readFileSync(imageFile.path)

        //upload image to imagekit
        const response=await imagekit.upload({
            file:fileBuffer,
            fileName:imageFile.originalname,
            folder:"/blogs"
        })

        //optimize through imagekit URL transformation
        const optimizedImageUrl=imagekit.url({
            path:response.filePath,
            transformation:[
                {quality:'auto'},   //auto compression
                {format:'webp'},    //convert to modern format
                {width:'1280'}      //width resizing
            ]
        })

        const image=optimizedImageUrl;

        await Blog.create({title,subTitle,description,category,image,isPublished})

        res.json({success:true,message:"Blog added successfully"})
    }catch(e){
        res.json({success:false,message:e.message})
    }
}

export const getAllBlogs=async(req,res)=>{
    try{
        const blogs=await Blog.find().sort({createdAt:-1})
        res.json({success:true,blogs})
    }
    catch(e){
         res.json({success:false,message:e.message})
    }
}

export  const getBlogById=async(req,res)=>{
    try{
        const {blogId}=req.params
        const blog=await Blog.findById(blogId).lean()
        if(!blog){
            res.json({success:false,message:"Blog not found"})
        }
        res.json({success:true,blog})
    }catch(e){
         res.json({success:false,message:e.message})
    }
}


export  const deleteBlogById=async(req,res)=>{
    try{
        const {id}=req.body;
        await Blog.findByIdAndDelete(id);
        
        //delete all the comments associated with the blog
        await Comment.deleteMany({blog:id});

        res.json({success:true,message:"Blog deleted successfully"})
    }catch(e){
         res.json({success:false,message:e.message})
    }
}

export const togglePublish=async(req,res)=>{
    try{
        const {id}=req.body;
        if(!id){
            return res.json({success:false,message:"Missing blog ID"})
        }
        const blog=await Blog.findById(id);
          if (!blog) {
            return res.json({ success: false, message: "Blog not found" });
        }

        blog.isPublished=!blog.isPublished
        await blog.save()
        res.json({success:true,message:"Blog status updated"})
    }catch(e){
         res.json({success:false,message:e.message})
    }
}

export const addComment=async(req,res)=>{
    try{
        const {blog,name,content}=req.body;
        await Comment.create({blog,name,content});
        res.json({success:true,message:'Comment added for review'})
    }catch(e){
        res.json({success:false,message:e.message})
    }
}

export const getBlogComments=async(req,res)=>{
    try{
        const {blogId}=req.body;
        const comments=Comment.find({blog:blogId,isApproved:true}).sort({createdAt:-1});
        res.json({success:true,message:comments})
    }catch(e){
        res.json({success:false,message:e.message})
    }
}

export const generateContent=async(req,res)=>{
    try{
        const {prompt}=req.body
        const content=await main(prompt+'Generate a blog content for this topic in simple text format')
        res.json({success:true,content})
    }catch(e){
         res.json({success:false,message:e.message})
    }
}