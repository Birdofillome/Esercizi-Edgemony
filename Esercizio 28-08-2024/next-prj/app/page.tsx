import { getUsers } from "@/action/get-users";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";

export default async function Home(){
  const users = await getUsers();
  return (
<main className="p-6 bg-gray-100 min-h-screen">
<h1 className="text-3xl font-bold text-center mb-8">Contacts</h1>
<Navbar/>
<div className="overflow-x-auto">
  <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
    <thead>
      <tr className="bg-gray-800 text-white">
        <th className="py-3 px-6 text-left">Name</th>
        <th className="py-3 px-6 text-left">Email</th>
        <th className="py-3 px-6 text-left">Phone</th>
        <th className="py-3 px-6 text-left">Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr
          key={user.id}>
          <td className="py-3 px-6">{user.name}</td>
          <td className="py-3 px-6">{user.email}</td>
          <td className="py-3 px-6">{user.phone}</td>
          <td className="py-3 px-6">
            <Button user={user} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</main>
);
}


// "use client";
// import { getUsers } from "@/action/get-users";
// import Button from "@/components/Button";
// import { useTransition, useState, useEffect } from "react";

// export default function Home() {
//   const [users, setUsers] = useState([]);
//   const [isPending, startTransition] = useTransition();

//   // Caricamento iniziale dei dati degli utenti
//   useEffect(() => {
//     startTransition(async () => {
//       const usersData = await getUsers();
//       setUsers(usersData);
//     });
//   }, []);

//   return (
//     <main className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-center mb-8">Contacts</h1>
//       <div className="overflow-x-auto">
//         {isPending ? (
//           <div className="text-center text-gray-500">Loading...</div>
//         ) : (
//           <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//             <thead>
//               <tr className="bg-gray-800 text-white">
//                 <th className="py-3 px-6 text-left">Name</th>
//                 <th className="py-3 px-6 text-left">Email</th>
//                 <th className="py-3 px-6 text-left">Phone</th>
//                 <th className="py-3 px-6 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user.id}>
//                   <td className="py-3 px-6">{user.name}</td>
//                   <td className="py-3 px-6">{user.email}</td>
//                   <td className="py-3 px-6">{user.phone}</td>
//                   <td className="py-3 px-6">
//                     <Button user={user} />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </main>
//   );
// }
