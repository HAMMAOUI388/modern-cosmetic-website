import React from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Products from '../components/Products'

const Home = () => {
    const posts =[
        {
            id:1,
            title:"Our Best Parfumes",
            desc: "Our exquisite fragrances captivate with a harmonious blend of vibrant top notes, captivating heart notes, and lingering base notes. Experience the essence of luxury with our irresistible collection of scents.",
            img:"../../Public/imgs/b7.png",
        },
        {
            id:2,
            title:"Our Best Parfumes",
            desc: "Our exquisite fragrances captivate with a harmonious blend of vibrant top notes, captivating heart notes, and lingering base notes. Experience the essence of luxury with our irresistible collection of scents.",
            img:"../../Public/imgs/f2.jpeg",
        },
        {
            id:3,
            title:"Our Best Parfumes",
            desc: "Our exquisite fragrances captivate with a harmonious blend of vibrant top notes, captivating heart notes, and lingering base notes. Experience the essence of luxury with our irresistible collection of scents.",
            img:"../../Public/imgs/f4.jpeg",
        }
    ]
  return (
    <div className='home'>
        <div>
            <Banner/>
        </div>
        <div className='posts'>
            {posts.map(post=>(
                <div className='post' key={post.id}>
                    <div className='img'>
                        <img src={post.img} alt=""/>
                    </div>
                    <div className='content'>

                            <h1>
                                {post.title}
                            </h1>

                            <p>{post.desc}</p>
                            <button type="submit">See more</button>

                    </div>
                </div>
            ))}
            
        </div>
        <div>
          <Categories/>
          <Products/>
        </div>
    </div>
  )
}

export default Home