import { collection, deleteDoc, doc, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase/firebase';
import SingleListPost from '../components/posts/SingleListPost';
import Loader from '../components/ui/loader/Loader';


function PostPage() {
  const [filterVal, setFilterVal] = useState('all')
  // parsiusti postus
  const postCollRef = collection(db, 'hookPosts');

  const q = 
    filterVal === 'all' 
    ? query(postCollRef) 
    : query(postCollRef, where('tags', 'array-contains', filterVal))

  const [value, loading, error] = useCollection(q);

  const docsWithUid =
    value && value.docs.map((doc) => ({ uid: doc.id, ...doc.data() }));
  useEffect(() => {}, []);

  
 
  console.log('error ===', error);
  return (
    <div className='container'>
      <h1>PostPage actually Post page</h1>
      <p>This is PostPage</p>
      <Loader show={loading} />
      <button className='btn' >Order by date: asc</button>
      <button className='btn btn-outline-dark btn-sm' onClick={() => setFilterVal('all')}>all</button>
      <button className='btn btn-outline-dark btn-sm' onClick={() => setFilterVal('books')}>books</button>
      <button className='btn btn-outline-dark btn-sm' onClick={() => setFilterVal('work')}>work</button>
      <button className='btn btn-outline-dark btn-sm' onClick={() => setFilterVal('laptop')}>laptop</button>
      <ul className='list-group'>
        {value &&
          docsWithUid.map((pObj) => (
            <li className='list-group-item list-group-item-dark' key={pObj.uid}>
              <SingleListPost item={pObj}/>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PostPage;