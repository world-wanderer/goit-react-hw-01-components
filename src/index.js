import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const user = {
//   username: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// function Profile(props) {
//   return (
//     <div class="profile">
//       <div class="description">
//         <img src={props.src} alt={props.name} class="avatar" />
//         <p class="name">{props.name}</p>
//         <p class="tag">@{props.tag}</p>
//         <p class="location">{props.location}</p>
//       </div>

//       <ul class="stats">
//         <li>
//           <span class="label">Followers</span>
//           <span class="quantity">1000</span>
//         </li>
//         <li>
//           <span class="label">Views</span>
//           <span class="quantity">2000</span>
//         </li>
//         <li>
//           <span class="label">Likes</span>
//           <span class="quantity">3000</span>
//         </li>
//       </ul>
//     </div>
//   );
// }

// ReactDOM.render(
//   <Profile
//     src={user.avatar}
//     name={user.username}
//     tag={user.tag}
//     location={user.location}
//   />,
//   document.querySelector('#root')
// );
