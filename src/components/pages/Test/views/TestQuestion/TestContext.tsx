import { createContext, useState, useCallback, useEffect } from 'react';

interface IcontextProps {
    children: any;
}
type Student = {
    id: number;
    name: string;
};
type StudentList = Array<Student> | [];

const TestContext = createContext<any>(null);

const TestProvider = ({ children }: IcontextProps) => {
    const [scoreList, setScoreList] = useState<StudentList>([]);

    const addScoreList = useCallback(
        ({ id, name }: Student) => {
            console.log(scoreList);
            setScoreList((prev) => {
                const newData = [...prev];
                newData.push({ id, name });
                return newData;
            });
        },
        [scoreList],
    );

    const deleteStudent = useCallback(({ id, name }: Student) => {
        setScoreList((prev) => {
            const deleteData = [...prev];
            deleteData.splice(id, 1);
            return deleteData;
        });
    }, []);

    useEffect(() => {
        console.log('studentlist', scoreList);
    }, [scoreList]);

    const value = {
        scoreList,
        setScoreList,
        addScoreList,
        deleteStudent,
    };
    return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
};

export { TestContext, TestProvider };
