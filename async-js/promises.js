 //https://www.youtube.com/watch?v=aUDMHTo78c8&          list=PLscJdMdrfjCDPfrh8ITVLQ5df88wOl2ql&index=3


        /*
        async function getUsers(){

            let prom = new Promise((resolve,reject)=>{

            //call api
            // prepare data

            let users = [{name:'Ajay'},{name:"axs"}]

            if (users.length > 0){
                resolve(users)
            }
            else{
                reject("Failed to get users")
            }

            })
            return prom;

        }



        async function getPosts(user){

            const prom = new Promise((resolve,reject)=>{

                // call api
                // prepare data

                let posts = [{title:'Internship'},{title:'Hackathon'}]

                if (posts.length>0){
                    resolve(posts)
                }
                else{
                    reject('Failed to fetch posts')
                }
            })
            return prom;

        }
            */

        /*
        getUsers()
        .then((users)=>{
            console.log(users)
            getPosts(users[0])
            .then((posts)=>{
                console.log(users)
            })
            .catch((err)=>{
                console.log(err)
            })
        })
        .catch((err)=>{
            console.log(err)
        })
            */

        // Better way to handle the above code

        /*
        getUsers()
        .then((users)=>{
            console.log(users)
            return getPosts(users[0]) // This return is done only if getPosts() function returns a promise
        })
        .then((posts)=>{
            console.log(posts)
        })
        .catch((err)=>{ // This error handling works for both the fnts
            console.log(err)
        })
            */
        


        // Calling real api using fetch
        /*
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
        })
        .catch((err)=>{
            console.log(err)
        })
            */

        
        // Handling promises using async await
        
        /*
        async function handleFetch(){ // await only works inside an async fnt

            response = await fetch('https://jsonplaceholder.typicode.com/posts')
            // await keyword makes it synchronous, ie the next line will be executed only after the complete execution of the current line
            data = await response.json()
            console.log(data)
        }
            */

        
        // Error handling using try catch with async await
        async function handleFetch(){ 
            try
            {
                response = await fetch('https://jsonplaceholder.typicode.com/posts')
                data = await response.json()
                console.log(data)
            }
            catch(err)
            {
                console.log(err)
            }
    
        }

        handleFetch()