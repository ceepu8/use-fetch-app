// @ts-nocheck
import React from "react";
// import { useGetCountries } from "./hooks/countries";
import { useGetQuotable } from "./hooks/quotable";

// const Country = () => {
//   const { data, error, loading } = useGetCountries();

//   // Handle the fetched data or error as needed
//   if (data) {
//     console.log("Fetched Data:", data);
//   } else if (error) {
//     console.error("Fetch Error:", error);
//   }

//   if (loading) return <div>...loading</div>;

//   return (
//     <ul style={{ padding: 24 }}>
//       {(data || []).map((item) => (
//         <li key={item.id}>
//           <span style={{ marginRight: 12 }}>{item.name.common}</span>
//           <img
//             src={item.flags.png}
//             height={20}
//             width={32}
//             alt={item.flags.alt}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// };

const Quotable = () => {
  const { data, error, loading } = useGetQuotable();

  // Handle the fetched data or error as needed
  if (data) {
    console.log("Fetched Data:", data);
  } else if (error) {
    console.error("Fetch Error:", error);
  }

  if (loading) return <div>...loading</div>;

  return (
    <div style={{ padding: 24, maxWidth: 720 }}>
      <h3>
        <b>{data?.content}</b>
      </h3>
      <p style={{ textAlign: "right" }}>{data?.author}</p>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Quotable />
      {/* <Country /> */}
    </>
  );
};

export default App;
