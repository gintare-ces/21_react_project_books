// sukurti tuscia komp
import React from 'react'
import NewPostForm from '../components/posts/NewPostForm'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { toast } from 'react-hot-toast'

function NewPostPage() {
    // 
    function handleNewPost(newPostObj) {
        const hookPostsRef = collection(db, "hookPosts")
        addDoc(hookPostsRef, newPostObj)
            .then(() => {
                toast.success('doc created')
            })
            .catch((error) => {
                toast.error('failed')
            })
    }
  return (
    <div className='container'>
        <h1>New Post Page</h1>
        <NewPostForm onNewPost={handleNewPost} />
    </div>
  )
}

export default NewPostPage
// prideti jo route

// prideti ji i headeri