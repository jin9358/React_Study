import React, { useEffect, useState } from 'react';
import IndexLayout from '../components/IndexLayout/IndexLayout';
import IndexMain from '../components/IndexMain/IndexMain';

function Index(props) {
    const [ isLoad, setLoad ] = useState(false);
    const [ todoList, setTodoList ] = useState([]);
    const [ filter, setFilter ] = useState("incomplete");
    const [ searchText, setSearchText ] = useState("");

    useEffect(() => {
        let localStorageTodoList = localStorage.getItem("todoList");
        if (!localStorageTodoList) {
            localStorage.setItem("todoList", JSON.stringify([]));
            localStorageTodoList = [];
            setTodoList(localStorageTodoList);
        } else {
            setTodoList(JSON.parse(localStorageTodoList));
        }
        setLoad(true);
    }, []);

    useEffect(() => {
        setSearchText("");
        if (isLoad) {
            let localStorageTodoList = localStorage.getItem("todoList");
            const todoListJson = JSON.stringify(todoList);
            if (localStorageTodoList !== todoListJson) {
                localStorage.setItem("todoList", todoListJson);
            }
        }
    }, [isLoad, todoList]);

    const filterTodoList = todoList.filter(todo => {
        if (filter === "all") {
            return true;
        } else if (filter === "complete") {
            return todo.isComplete;
        } else if (filter === "incomplete") {
            return !todo.isComplete;
        }
    }).filter(todo => {
        if (searchText.trim().length === 0) {
            return true;
        }
        return todo.content.includes(searchText);
    });

    return (
        <IndexLayout filter={filter} setFilter={setFilter} setSearchText={setSearchText} >
            <IndexMain todoList={filterTodoList} setTodoList={setTodoList} />
        </IndexLayout>
    );
}

export default Index;