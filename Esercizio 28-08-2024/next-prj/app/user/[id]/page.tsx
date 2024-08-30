import { getUser } from "@/action/get-user";
import ButtonBack from "@/components/ButtonBack";
import Navbar from "@/components/Navbar";

interface UserProps {
params: { id: string };
}

async function UserPage({ params }: UserProps) {
const { id } = params;
const user = await getUser(id);

return (
    <main className="p-6 bg-gray-100 min-h-screen">
    <h1 className="text-3xl font-bold text-center mb-8">Contacts</h1>
    <Navbar/>
    <ButtonBack/>
    <h1 className="text-3xl font-bold text-center mb-8">User Details</h1>
    <div className="flex justify-center">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        <ul className="space-y-4">
            <li className="text-lg font-medium">
            <span className="text-gray-700">Name:</span> {user.name}
            </li>
            <li className="text-lg font-medium">
            <span className="text-gray-700">Email:</span> {user.email}
            </li>
            <li className="text-lg font-medium">
            <span className="text-gray-700">Phone:</span> {user.phone}
            </li>
            <li className="text-lg font-medium">
            <span className="text-gray-700">Website:</span> {user.website}
            </li>
        </ul>
        </div>
    </div>
    </main>
);
}

export default UserPage;
