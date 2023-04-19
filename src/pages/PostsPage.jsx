import { collection } from 'firebase/firestore';
import { useEffect } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase/firebase';
import SingleListPost from '../components/posts/SingleListPost';
import Loader from '../components/ui/loader/Loader';

function PostPage() {
  // parsiusti postus
  const postCollRef = collection(db, 'posts');
  const [value, loading, error] = useCollection(postCollRef);

  const docsWithUid =
    value && value.docs.map((doc) => ({ uid: doc.id, ...doc.data() }));
  useEffect(() => {}, []);

  console.log('error ===', error);
  return (
    <div className='container'>
      <h1>PostPage actually Post page</h1>
      <p>This is PostPage</p>
      <Loader show={loading} />
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