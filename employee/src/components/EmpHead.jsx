import EmpData from "./EmpData";

function EmpHead() {
  const emps = [
    { ename: "Anita", desig: "Manager", dept: "Trg", email: "Anita@abc.com" },
    { ename: "Kavita", desig: "SSE", dept: "FSBU", email: "Kavita@abc.com" },
    { ename: "Sunita", desig: "Associate", dept: "Legal", email: "Sunita@abc.com" },
  ];

  return (
    <div>
      <h4>Employee Details</h4>

      {emps.map((emp, index) => (
        <EmpData
          key={index}
          ename={emp.ename}
          desig={emp.desig}
          dept={emp.dept}
          email={emp.email}
        />
      ))}
    </div>
  );
}

export default EmpHead;
