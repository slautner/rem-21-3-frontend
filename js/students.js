export function renameImmutableIndex(students, name, newName) {
    const studentsCopy = [...students]
    const studentFoundIndex = studentsCopy.findIndex(student => student.name === name)
    if (studentFoundIndex >= 0) {
        const studentCopy = {...studentsCopy[studentFoundIndex]}
        studentCopy.name = newName
        studentsCopy[studentFoundIndex] = studentCopy;
    }
    return studentsCopy;
}

export function renameImmutableMap(students, name, newName) {
    // map creates a new array itself copy of students is obsolete
    return students.map(student => {
        if (student.name === name) {
            return {...student, name: newName}
        }
        return student;
    });
}

export function renameMutable(students, name, newName) {
    const studentFound = students.find(student => student.name === name)
    if (studentFound) {
        studentFound.name = newName;
    }
    return students;
}
