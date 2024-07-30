
// // import React from "react";
// // import {categoryInfos} from './catagoryFullInfos'
// // import CategoryCard from "./CategoryCard";
// // import classes from './category.module.css'

// // function Category() {
// //   return (
// //     <section className={classes.category_container}>
// //       {categoryInfos.map((categoryInfos) => (
// //         <CategoryCard key={categoryInfos.id} data={categoryInfos} />
// //         // <CategoryCard data = {infos}/>
// //       ))}
// //     </section>
// //   );
// // }

// // export default Category;



// import React from "react";
// import { categoryInfos } from "./catagoryFullInfos";
// import CategoryCard from "./CategoryCard";
// import classes from "./category.module.css";
// function Category() {
//   return (
//     <section className={classes.category__container}>
//       {categoryInfos.map((infos) => (
//         <CategoryCard key={infos.imgLink} data={infos} />
//       ))}
//     </section>
//   );
// }

// export default Category;



import React from "react";
import { categoryInfos } from "./catagoryFullInfos"; // Fix the import path
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";

function Category() {
  return (
    <section className={classes.category__container}>
      {categoryInfos.map((categoryInfo) => (
        <CategoryCard key={categoryInfo.name} data={categoryInfo} />
      ))}
    </section>
  );
}

export default Category;

