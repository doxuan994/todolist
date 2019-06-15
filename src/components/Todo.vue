<template>
    <div class="todos">
        <h1>Todos</h1>


        <form v-on:submit="submitForm">
            <input type="text" v-model="text">
        </form>

        <ul>
            <li v-for="todo in todos">

                <input class="toggle" type="checkbox" v-model="todo.completed">

                <!-- Add a class named 'completed' when todo.completed is true -->
                <span v-bind:class="{completed: todo.completed}">

                    <label v-on:dblclick="deleteTodo(todo)">{{todo.text}}</label>

                </span>


            </li>
        </ul>
    </div>

</template>

<script>
export default {
    name: 'Todo',
    data () {
        return {
            todos: [
                {
                    text: 'My Todo One',
                    completed: false
                },
                {
                    text: 'My Todo Two',
                    completed: false
                },
                {
                    text: 'My Todo Three',
                    completed: false
                },
            ],
            text: ''
        }
    },
    methods: {
        deleteTodo: function(todo) {
            this.todos.splice(this.todos.indexOf(todo), 1);
        },
        submitForm: function(e) {
            this.todos.push({
                text: this.text,
                completed: false
            });
            e.preventDefault();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    ul {
        list-style: none;
        padding: 0;
        max-width: 400px;
        margin: 0 auto;
        margin-top: 2em;
    }
    li {
        padding: 1em 0;
        border: 1px grey solid;
    }

    .completed {
        text-decoration: line-through;
    }

</style>
