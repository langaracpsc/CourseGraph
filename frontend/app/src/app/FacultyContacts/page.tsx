import { FC } from "react";
import FacultyMember from "../components/FacultyMember";

type Member = {
  name: string;
  title: string;
  office: string;
  phone: string;
  email: string;
  overrideRequests: boolean;
};

// Placeholder data
type DepartmentData = {
  department: string;
  members: Member[];
};

const Page: FC = () => {
  // Placeholder data
  const data: DepartmentData = {
    department: "Computer Science",
    members: [
      {
        name: "Stephen Chiong",
        title: "Department Chair",
        office: "B019L",
        phone: "604.323.5711",
        email: "schiong@mylangara.ca",
        overrideRequests: true,
      },
      {
        name: "John Doe",
        title: "Professor",
        office: "A123",
        phone: "604.323.1111",
        email: "jdoe@mylangara.ca",
        overrideRequests: false,
      },
      {
        name: "Jane Smith",
        title: "Assistant Professor",
        office: "B456",
        phone: "604.323.2222",
        email: "jsmith@mylangara.ca",
        overrideRequests: false,
      },
    ],
  };

  return (
    <div className="mt-14 pt-6 px-8 text-white">
      <h1 className="text-xl font-semibold">Faculty Members</h1>
      <div className="pt-6">
        <h2 className="text-xl font-semibold border-b-2 border-orange-500 w-52 pb-1">
          {data.department}
        </h2>
        {data.members.map((member, index) => (
          <FacultyMember
            key={index}
            name={member.name}
            title={member.title}
            office={member.office}
            phone={member.phone}
            email={member.phone}
            overrideRequests={member.overrideRequests}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
