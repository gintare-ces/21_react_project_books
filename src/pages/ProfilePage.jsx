
import { useEffect, useState } from 'react';
import { useAuthCtx } from '../store/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import { auth } from '../firebase/firebase';

function ProfilePage() {
//  atvaizduoti kas siuo metu yra prisijunges
// paimti user.email is context
const { user } = useAuthCtx()
console.log('user ===', user);
// paimti display name is user.displayName is context
const userName = user?.displayName
const [newName, setNewName] = useState(userName || '')

useEffect(() => {
  console.log('UseEffect new name ===');
  setNewName(userName)
}, [userName])
function updateUserProfile() {
  updateProfile(auth.currentUser, {
    displayName: newName,
  })
    .then(() => {
      toast.success('Updated')
    })
    .catch((error) => {
      toast.error('Failed')
    })
}
  return (
    <div className='container'>
      <h1>{user?.displayName} Profile page</h1>
      <p>This is ProfilePage</p>
      <h3>You are logged in as: {user?.email}</h3>
     
      <div className="mb-3">
        <label htmlFor="displayName" className="form-label">Email address</label>
        <input 
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          type="text" 
          className="form-control" 
          id="displayName" 
          placeholder="Enter your display name" 
          
          />
      </div>
        <button onClick={updateUserProfile} className='btn btn-primary'>Change</button>
    </div>
  );
}

export default ProfilePage;