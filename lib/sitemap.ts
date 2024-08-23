// 动态sitemap生成...
// 
export default async function sitemap(){
//  const res = await fetch('')  

    // const posts = allPosts.map((post) =>({
    //     url : `https://localhost:3000/post/${post.id}`,
    //     lastModified:new Date().toISOString()
    // })) 

    const routes = ['','/about','/post'].map((route) =>({
        url:`https://localhost:3000${route}`,
        lastModified:new Date().toISOString()
    }))

    return [...routes,...routes]

}