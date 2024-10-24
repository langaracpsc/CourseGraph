import { FC } from "react";
import MenuLink from "../components/MenuLink";

const Page: FC = () => {
  return (
    <div className="px-8">
      <ul className="flex flex-col justify-center content-start h-screen text-2xl font-medium">
        <li>
          <MenuLink path="/Profile" label="Profile" />
        </li>
        <li>
          <MenuLink path="/CourseScheme" label="Course Scheme" />
        </li>
        <li>
          <MenuLink path="/CourseList" label="Courses List" />
        </li>
        <li>
          <MenuLink path="/FacultyContacts" label="Faculty Contacts" />
        </li>
        <li>
          <MenuLink path="/AppGuide" label="App Guide" />
        </li>
      </ul>
    </div>
  );
};

export default Page;
