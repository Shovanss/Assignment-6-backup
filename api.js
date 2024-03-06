



const allPosts = async () => {
    loadingSpinner();
      const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
      const data = await res.json();
      const posts = data.posts;
   
  displayPosts(posts);
  }
  const searchPost = async (searchCategory) => {
    loadingSpinner();
      const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchCategory}`);
      const data = await res.json();
      const posts = data.posts;
   
  displayPosts(posts);
  }
  
  
  
  const displayPosts = posts => {
    const postContainer = document.getElementById('post-container');
    postContainer.textContent = '';
      posts.forEach(post => {
        console.log(post)
          const postCard = document.createElement('div');
          postCard.classList = 'bg-[#797DFC1A] rounded-3xl  mx-4';
          postCard.innerHTML = `
          <div class="flex  flex-col lg:flex-row ">
          <div class="mt-4 mr-8 mx-3 lg:mt-10 lg:mr-8 lg:mx-6">
          <div class="indicator rounded-2xl">
          <span class="indicator-item badge  ${post.isActive ? 'badge-success' : 'badge-secondary'}"></span> 
          <img class="w-16 rounded-2xl" src="${post.image}" alt="">
        </div>
            </div>
      
            <div class="my-4 mx-3 lg:my-10">
              <div class="flex gap-5 font-inter font-medium text-[#12132DCC] pb-3">
                <p>#<span>${post.category}</span></p>
                <p>Author: ${post.author.name}</p>
              </div>
              <div class="lg:mr-4">
                <p class="font-mulish lg:font-bold lg:text-xl pb-4">${post.description
                }</p>
                <p class="font-inter text-[#12132D99] pb-4">It’s one thing to subject yourself to ha Halloween costume  mishap because,
                <br>
                hey that’s your prerogative</p>
              </div>
              <hr class="border-[1px] border-dashed border-[#12132D40] mb-6 w-[300px] lg:w-[580px]">
      <div class="flex gap-7">
        <div class="flex gap-3">
          <img src="images/tabler-icon-message-2.png" alt="">
          <p class="font-inter text-[#12132D99]">${post.comment_count
          }</p>
        </div>
        <div class="flex gap-2">
          <img src="images/tabler-icon-eye.png" alt="">
          <p class="font-inter text-[#12132D99]">${post.view_count
          }</p>
        </div>
        <div class="flex gap-2">
          <img src="images/Group 18 (1).png" alt="">
          <p class="font-inter text-[#12132D99]">${post.posted_time}</p>
        </div>
        <button onclick="clickMe('${post.title.replace("'", " ")}',${post.view_count})" class="lg:translate-x-56"><img src="images/Group 40106.png" alt=""></button>
        
      </div>
     
            </div> 
          </div>
        </div>
       
          `;
          postContainer.appendChild(postCard);
          // loadingSpinner(false)
      });
      
  }
  
  const latestPosts = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    
  
    const displayLatestPosts = document.getElementById('latest-post-container');
    data.forEach((post) => {
  const postBody = document.createElement('div');
  postBody.innerHTML =`
  <div class="card w-full border-[1px] border-solid border-[#12132D26] mt-4">
            <figure class="px-10 pt-10">
              <img src="${post.cover_image}"class="rounded-xl" />
            </figure>
            
            <div class="card-body rounded-3xl h-[290px]">
              <div class="flex gap-2">
                <img src="images/Framee.png" alt="">
                <p class="font-mulish text-[#12132D99] ">${post.author?.posted_date ? post.author?.posted_date : 'No Publish Date'}</p>
              </div>
              <h2 class="card-title text-black font-mulish font-extrabold text-lg">${post.title}</h2>
              <p class="font-mulish text-[#12132D99]">${post.description}</p>
              <div class="flex gap-2">
                <img class="w-16 rounded-full" src="${post.profile_image}" alt="">
                <div>
                  <p class="text-black font-mulish font-bold">${post.author.name}</p>
                  <p class="font-mulish text-[#12132D99]">${post.author.designation ? post.author.designation : 'Unknown'}</p>
                </div>
                
              </div>
              
            </div>
          </div>
  `
  displayLatestPosts.appendChild(postBody);
    })
  
    }
  
    
    function clickMe(title, view){
      const countClick = document.getElementById('counter').innerText;
      const newCount = parseInt(countClick);
      document.getElementById('counter').innerText = newCount + 1;
      
  
  
     const readContainer = document.getElementById('mark-read-container');
     const postRead = document.createElement('div');
     postRead.innerHTML = `
     <div class="lg:flex flex-col lg:justify-around rounded-2xl lg:p-6 lg:mt-4 gap-4 bg-white">
    <p class="font-mulish font-bold text-xl">${title}</p>
     <div class="flex gap-1 items-center text-center">
     <img src="images/tabler-icon-eye.png" alt="" >
          <p class="font-inter text-[#12132D99]">${view}</p>
  
   </div>
  </div>
     `;
     readContainer.appendChild(postRead);
     console.log('clicked');
    }
    
  
    const loadingSpinner = () => {
      
      const loading = document.getElementById('spinner')
          loading.classList.add('hidden');
  
    
     
  }
  
  
  
  const searchCategory = () => {
   
      const searchOptions = document.getElementById('search-by-category').value;
      
      setTimeout(function () {
       
        searchPost(searchOptions);
      }, 2000);
      const loading = document.getElementById('spinner')
      loading.classList.remove('hidden');
    
  }
  setTimeout(function () {
    allPosts();
    loadingSpinner();
    
  }, 2000);
  // allPosts();
  latestPosts();