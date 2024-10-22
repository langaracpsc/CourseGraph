import { FC } from "react";

type Member = {
    name: string;
    title: string;
    office: string;
    phone: string;
    email: string;
    overrideRequests: boolean;
};

type DepartmentData = {
    department: string;
    members: Member[];
}

const Page: FC = () => {
  const data: DepartmentData = {
    // Placeholder data
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
    <div className="mt-14 pt-6 px-8">
      <h1 className="text-xl font-semibold">Faculty Members</h1>
      <div className="pt-6">
        <h2 className="text-xl font-semibold border-b-2 border-orange-500 w-52 pb-1">
          {data.department}
        </h2>
        {data.members.map((member, index) => (
          <div key={index} className="w-48 pt-1">
            {member.overrideRequests && (
              <h3 className="text-lg font-semibold">Override requests:</h3>
            )}
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm leading-3 text-neutral-300">{member.title}</p>
            <ul className="pt-4 pb-1 border-b border-orange-500 leading-tight text-neutral-300">
              <li>Office: {member.office}</li>
              <li>Phone: {member.phone}</li>
              <li>
                Email Address: <span className="underline">{member.email}</span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
