// import React, { useEffect } from "react";
// import ShopLogin from "../components/Shop/ShopLogin";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// const ShopLoginPage = () => {
//   const navigate = useNavigate();
//   const { isSeller, seller ,isLoading } = useSelector((state) => state.seller);
//   useEffect(() => {
//     if (isSeller === true) {
//       navigate(`/shop/${seller._id}`);
//     }
//   }, []);
//   return (
//     <div>
//       <ShopLogin />
//     </div>
//   );
// };

// export default ShopLoginPage;

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShopLogin from "../components/Shop/ShopLogin";

const ShopLoginPage = () => {
  const navigate = useNavigate();
  const { isSeller, isLoading } = useSelector((state) => state.seller);

  useEffect(() => {
    if (isSeller === true) {
      navigate(`/dashboard`);
    }
  }, [isLoading, isSeller]);
  return (
    <div>
      <ShopLogin />
    </div>
  );
};

export default ShopLoginPage;
