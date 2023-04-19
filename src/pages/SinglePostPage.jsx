import { doc } from 'firebase/firestore'
import React from 'react'
import { useDocument } from 'react-firebase-hooks/firestore'
import { useParams } from 'react-router-dom'
import { db } from '../firebase/firebase'
import SinglePost from '../components/posts/SinglePost'
import Loader from '../components/ui/loader/Loader'

function SinglePostPage() {
  // gauti id to post kuriame esam
  const { postUid } = useParams()

  const docRef = doc(db, 'hookPosts', postUid)
  const [value, loading, error] = useDocument(docRef)
  // parsiusti posta react cloud firestore hooks
  console.log('value?.data() ===', value?.data());
  const thisPostObj = value?.data()
  console.log('error ===', error);
  return (
    <div  className='container'>
      <h1 className='display-3 mt-5'>{thisPostObj?.title}</h1>
      <Loader show={loading} />
      {/* single post */}
      <SinglePost item={thisPostObj} />
    </div>
  )
}

export default SinglePostPage