// import React from "react";
// import { useDispatch } from "react-redux";
// import { filterCountryByName } from "../../redux/actions";

// export default function filterCountryByName({ setOrder }) {
//   const dispatch = useDispatch();

//   function handleChange(e) {
//     e.preventDefault();
//     dispatch(filterCountryByName(e.target.value));
//     setOrder(e.target.value);
//   }

//   return (
//     <div>
//       <div>
//         <select onChange={(e) => handleChange(e)}>
//           <option value="all" key="all">
//             filter By Name
//           </option>
//           <option value="asc" key="asc">
//             A - Z
//           </option>
//           <option value="desc" key="desc">
//             Z - A
//           </option>
//         </select>
//       </div>
//     </div>
//   );
// }