import Link from "next/link";

const page = () => {
  return (
    <div className="px-10">
      <ul className="flex flex-col justify-center content-start h-screen text-2xl font-medium">
        <li>
          <Link href={"/Profile"} className="block pt-8 pb-1 pl-1 mt-2 w-60 border-orange-500 border-b hover:bg-neutral-800 focus:outline-none focus:bg-neutral-700 transition-colors duration-200">Profile</Link>
        </li>
        <li>
          <Link href={"/CourseScheme"} className="block pt-8 pb-1 pl-1 mt-2 w-60 border-orange-500 border-b hover:bg-neutral-800 focus:outline-none focus:bg-neutral-700 transition-colors duration-200"> Courses Scheme</Link>
        </li>
        <li>
          <Link href={"/CourseList"} className="block pt-8 pb-1 pl-1 mt-2 w-60 border-orange-500 border-b hover:bg-neutral-800 focus:outline-none focus:bg-neutral-700 transition-colors duration-200">Courses List</Link>
        </li>
        <li>
          <Link href={"/FacultyContacts"} className="block pt-8 pb-1 pl-1 mt-2 w-60 border-orange-500 border-b hover:bg-neutral-800 focus:outline-none focus:bg-neutral-700 transition-colors duration-200">Faculty Contacts</Link>
        </li>
        <li>
          <Link href={"/AppGuide"} className="block pt-8 pb-1 pl-1 mt-2 w-60 border-orange-500 border-b hover:bg-neutral-800 focus:outline-none focus:bg-neutral-700 transition-colors duration-200">App Guide</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
