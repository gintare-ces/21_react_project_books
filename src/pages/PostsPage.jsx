import { collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase/firebase';
import SingleListPost from '../components/posts/SingleListPost';
import Loader from '../components/ui/loader/Loader';

function PostPage() {
  const [filterArr, setFilterArr] = useState('laptop')
  // parsiusti postus
  const postCollRef = collection(db, 'hookPosts');
  const [value, loading, error] = useCollection(postCollRef);

  const docsWithUid =
    value && value.docs.map((doc) => ({ uid: doc.id, ...doc.data() }));
  useEffect(() => {}, []);

  const filterTags = ({tags}) => tags.includes(filterArr)
  const filtered = docsWithUid?.filter(filterTags)

  console.log('filtered ===', filtered);
  console.log('error ===', error);
  return (
    <div className='container'>
      <h1>PostPage actually Post page</h1>
      <p>This is PostPage</p>
      <Loader show={loading} />
      <button onClick={() => setFilterArr('books')}>books</button>
      <button onClick={() => setFilterArr('work')}>work</button>
      <button onClick={() => setFilterArr('laptop')}>laptop</button>
      <ul className='list-group'>
        {value &&
          docsWithUid.filter(filterTags).map((pObj) => (
            <li className='list-group-item list-group-item-dark' key={pObj.uid}>
              <SingleListPost item={pObj}/>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PostPage;