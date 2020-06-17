import React, { createContext, useReducer, useEffect } from 'react';

// module utile (copy object, find, ... ) déjà présent dans React 
import _ from 'lodash';

// fonctions utiles
const average = notes => {
    if (notes.length === 0) return null;

    return Math.round(10 * (notes.reduce((acc, curr) => acc + curr) / notes.length)) / 10;
}

const findStudent = (id, students) => {
    const student = students.filter(student => student.id === id);

    if (student.length > 0) return student[0];

    return null;
}

const selectedMention = (id, behaviours) => {
    // { id : 1, mention : "A" } structure libre dans behaviours
    let behaviour = behaviours.find(s => s.id === id) ;

    if (behaviour) { 
        behaviour = { ...behaviour }

        return behaviour.mention;
    }

    return "Aucune";
}

const SchoolContext = createContext();

// Source de vérité
const initialState = {
    students: [
        { id: 1, name: "Alice", lessons: [1, 2], attendance: 0, notes: [11, 12, 18] }, // ref1
        { id: 2, name: "Alan", lessons: [3], attendance: 0, notes: [10, 14.5, 11] }, // ref2
        { id: 3, name: "Phil", lessons: [1, 2, 3], attendance: 0, notes: [11, 9, 9] }, // ref3
        { id: 4, name: "Naoudi", lessons: [1], attendance: 0, notes: [14.5, 19, 18] }, // ref4
        { id: 5, name: "Fenley", lessons: [3], attendance: 0, notes: [9, 7, 11] },],
    lessons: [
        { id: 1, title: "React" },
        { id: 2, title: "React Native" },
        { id: 3, title: "MongoDB" }
    ],
    behaviours: [],
    order: false
};

// copy profonde
const copyInitialState = _.cloneDeep(initialState);

const reducer = (state, action) => {

    let newStudent, students;

    switch (action.type) {

        case "DECREMENT_ATTENDANCE":
        case "INCREMENT_ATTENDANCE":
            newStudent = _.cloneDeep(state.students.find(student => student.id === action.id));
            const sens = action.count > 0 ? 1 : -1;
            newStudent.attendance = newStudent.attendance > 0 ? newStudent.attendance + sens : (newStudent.attendance == 0 && action.count > 0 ? 1 : 0);

            // solution plus longue ... Mais plus lisible donc à considérer
            // if (action.count > 0) {
            //     newStudent.attendance = newStudent.attendance + 1;

            // } else {
            //     if (newStudent.attendance <= 0) newStudent.attendance = 0;
            //     else {
            //         newStudent.attendance = newStudent.attendance - 1;;
            //     }
            // }

            students = state.students.map(student => {
                if (student.id === action.id) return newStudent;

                return _.cloneDeep(student);
            });

            return {
                ...state,
                students: students
            }

        case 'RESET':

            // la fonction map renvoie un nouveau tableau
            students = state.students.map(student => { student.attendance = 0; return student });

            return {
                ...state,
                students: students
            }

        case 'ORDER':
            const { order } = action;

            students = _.cloneDeep(state.students);

            order === false ? students.sort((a, b) => average(a.notes) > average(b.notes) ? - 1 : 0) : students.sort((a, b) => average(a.notes) < average(b.notes) ? -1 : 0);

            return {
                ...state,
                students: students,
                order: order
            }

        case 'MENTION':

            const { id, mention } = action;

            let behaviours = _.cloneDeep(state.behaviours);

            console.log(behaviours);

            if( behaviours.filter(behaviour => behaviour.id === id).length === 0){
                behaviours.push({id : id, mention : mention });
            }else{
                behaviours.map( behaviour => {
                    if(behaviour.id === id ) behaviour.mention = mention;

                    return behaviour;
                });
            }

            return {
                ...state,
                behaviours: behaviours
            }

        default:
            throw new Error("Bad action type");
    }
}

const SchoolProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, copyInitialState);

    useEffect(() => {
        dispatch({ type: 'ORDER', order: false })
    }, []);

    return (
        <SchoolContext.Provider value={[state, dispatch]}>
            {children}
        </SchoolContext.Provider>
    )
}

export { SchoolContext, SchoolProvider, average, findStudent, selectedMention };