import React from "react";

import "./App.css";

import Wrap from "./hoc/Wrap/Wrap";
import Content from "./Components/Content/Content";

import Subjects from "./Containers/Subjects/Subjects";
import Students from "./Components/Students/Students";
import DeregAnalysis from "./Components/DeregAnalysis/DeregAnalysis";

import { Route, Switch } from "react-router-dom";

class App extends React.Component {
   state = {
      numSubjects: 6,
      recent: [],
      subjects: [
         {
            title: "Algorithms",
            code: "CS20012",
            credits: [3, 2, 0],
            sem: 3,
            students: [
               {
                  name: "algo1-1",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "algo1-2",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "algo1-3",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "algo1-4",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "algo1-5",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "algo1-6",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
            ],
         },
         {
            title: "Algorithms II",
            code: "CS30001",
            credits: [4, 1, 0],
            sem: 6,
            students: [
               {
                  name: "algo2-1",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "algo2-2",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "algo2-3",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "algo2-4",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "algo2-5",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "algo2-6",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
            ],
         },
         {
            title: "Network Theory",
            code: "CS30048",
            credits: [3, 1, 2],
            sem: 6,
            students: [
               {
                  name: "nt1-1",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "nt1-2",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "nt1-3",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "nt1-4",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "nt1-5",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "nt1-6",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
            ],
         },
         {
            title: "Network Theory",
            code: "CS30096",
            credits: [3, 1, 2],
            sem: 6,
            students: [
               {
                  name: "nt2-1",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "nt2-2",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "nt2-3",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "nt2-4",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "nt2-5",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "nt2-6",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
            ],
         },
         {
            title: "Network Theory",
            code: "CS30045",
            credits: [3, 1, 2],
            sem: 6,
            students: [
               {
                  name: "nt3-1",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "nt3-2",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "nt3-3",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "nt3-4",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "nt3-5",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "nt3-6",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
            ],
         },
         {
            title: "Network Theory",
            code: "CS30012",
            credits: [3, 1, 2],
            sem: 6,
            students: [
               {
                  name: "nt4-1",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "nt4-2",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "nt4-3",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "nt4-4",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "nt4-5",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
               {
                  name: "nt4-6",
                  rollNo: "19CS30038",
                  isDereg: false,
                  isAdded: false,
               },
            ],
         },
      ],
   };

   studentClickHandler = (code, name) => {
      const subjectsCopy = this.state.subjects.map((subject) => {
         return {
            ...subject,
            credits: [...subject.credits],
            students: subject.students.map((student) => {
               return {
                  ...student,
               };
            }),
         };
      });
      this.state.subjects.forEach((subject, index) => {
         if (code === subject.code)
            subject.students.forEach((student, index2) => {
               if (student.name === name) {
                  subjectsCopy[index].students[index2].isDereg = !subjectsCopy[
                     index
                  ].students[index2].isDereg;
                  this.setState({ subjects: subjectsCopy });
               }
            });
      });
   };

   addSubjectHandler = (newSubject) => {
      const subjectsCopy = this.state.subjects.map((subject) => {
         return {
            ...subject,
            credits: [...subject.credits],
            students: subject.students.map((student) => {
               return {
                  ...student,
               };
            }),
         };
      });
      subjectsCopy.push({ ...newSubject, students: [] });
      this.setState({ subjects: subjectsCopy });
   };

   render = () => {
      const subjectsCopy = this.state.subjects.map((subject) => {
         return {
            ...subject,
            credits: [...subject.credits],
            students: subject.students.map((student) => {
               return {
                  ...student,
               };
            }),
         };
      });
      return (
         <Wrap>
            <Content>
               <Switch>
                  {/* <Subjects/> */}
                  <Route
                     path="/"
                     exact
                     render={() => (
                        <Subjects
                           subjects={subjectsCopy}
                           recent={[...this.state.recent]}
                           addSubject={this.addSubjectHandler}
                        />
                     )}
                  />
                  <Route
                     path="/deregAnalysis"
                     render={() => (
                        <DeregAnalysis
                           subjects={subjectsCopy}
                           studentClick={this.studentClickHandler}
                        />
                     )}
                  />
                  <Route
                     path="/:id"
                     render={() => (
                        <Students
                           subjects={subjectsCopy}
                           studentClick={this.studentClickHandler}
                        />
                     )}
                  />
               </Switch>
            </Content>
         </Wrap>
      );
   };
}

export default App;
