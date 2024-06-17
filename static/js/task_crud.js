const getTasks = (method, url_path) => {
    /**
     * The function `getTasks` makes an AJAX request to retrieve tasks data and dynamically populates
     * different task containers based on their status.
     * @param method - The `method` parameter in the `getTasks` function represents the HTTP request method
     * to be used for the AJAX call. Common HTTP methods include GET, POST, PUT, DELETE, etc. This
     * parameter specifies how the server should process the request.
     * @param url_path - The `url_path` parameter in the `getTasks` function is the URL path where the AJAX
     * request will be sent to fetch tasks data. This URL should point to a server-side endpoint that will
     * return the tasks data in response to the AJAX request.
    */
    /* The code is makes an AJAX request to a specified URL and handling the response data. It
    clears the content of three different containers (`InProgress`, `Completed`, `Overdue`) and then
    iterates over the response data. Depending on the `status` property of each element in the response,
    it dynamically generates HTML content for tasks in progress, completed tasks, or overdue tasks. */
    $.ajax({
        type: method,
        url: url_path,
        success: (response) => {
            let data = "";
            var InProgress = $("#task-progress-container");
            var Completed = $("#task-completed-container");
            var Overdue = $("#task-overdue-container");
            InProgress.empty();
            Completed.empty();
            Overdue.empty();
            response.forEach((element) => {
                switch (element.status) {
                    case "In Progress":
                        data += `
                        <div class="flex items-center justify-between mb-2">
                            <span class="px-3 py-2 text-sm text-white bg-red-500 rounded"
                                >${element.priority}</span
                            >
                            <span class="px-3 py-2 text-sm text-gray-500 bg-gray-200 rounded"
                                >${element.due_date}</span
                            >
                            <span
                                class="px-3 py-2 text-sm text-purple-500 bg-purple-100 rounded"
                                >${element.category}</span
                            >
                        </div>
                        <div class="p-4 bg-gray-100 rounded-lg shadow">
                            <h3 class="font-semibold text-gray-800">${element.title}</h3>
                            <p class="text-gray-600 description-container">
                                ${element.description}
                            </p>
                            <div class="flex items-center justify-between mt-2">
                                <div class="flex items-center space-x-1">
                                    <span class="text-gray-500">0/3</span>
                                </div>
                                <div class="flex items-center space-x-1">
                                    <img
                                        class="w-6 h-6 rounded-full"
                                        src="https://via.placeholder.com/24"
                                        alt="avatar"
                                    />
                                    <img
                                        class="w-6 h-6 rounded-full"
                                        src="https://via.placeholder.com/24"
                                        alt="avatar"
                                    />
                                    <img
                                        class="w-6 h-6 rounded-full"
                                        src="https://via.placeholder.com/24"
                                        alt="avatar"
                                    />
                                    <span class="text-gray-500">+2</span>
                                </div>
                            </div>
                            <div class="flex items-center justify-end space-x-2 mt-2">
                                <button class="text-gray-500 hover:text-gray-700">
                                    <i class="fas fa-eye"></i>
                                </button>
                                <button class="text-gray-500 hover:text-gray-700">
                                    <i class="fas fa-trash"></i>
                                </button>
                                <button class="text-gray-500 hover:text-gray-700">
                                    <i class="fas fa-edit"></i>
                                </button>
                            </div>
                        </div>
                        `;
                        InProgress.empty().append(data);
                        console.log(InProgress.length);
                        break;
                    case "Completed":
                        data = `
                            <div class="flex items-center justify-between mb-2">
                                <span class="px-3 py-2 text-sm text-white bg-red-500 rounded"
                                    >${element.priority}</span
                                >
                                <span class="px-3 py-2 text-sm text-gray-500 bg-gray-200 rounded"
                                    >${element.due_date}</span
                                >
                                <span
                                    class="px-3 py-2 text-sm text-purple-500 bg-purple-100 rounded"
                                    >${element.category}</span
                                >
                            </div>
                        <div class="p-4 bg-gray-100 rounded-lg shadow">
                            <h3 class="font-semibold text-gray-800">${element.title}</h3>
                            <p class="text-gray-600 description-container">
                                ${element.description}
                            </p>
                            <div class="flex items-center justify-between mt-2">
                                <div class="flex items-center space-x-1">
                                    <span class="text-gray-500">0/3</span>
                                </div>
                                <div class="flex items-center space-x-1">
                                    <img
                                        class="w-6 h-6 rounded-full"
                                        src="https://via.placeholder.com/24"
                                        alt="avatar"
                                    />
                                    <img
                                        class="w-6 h-6 rounded-full"
                                        src="https://via.placeholder.com/24"
                                        alt="avatar"
                                    />
                                    <img
                                        class="w-6 h-6 rounded-full"
                                        src="https://via.placeholder.com/24"
                                        alt="avatar"
                                    />
                                    <span class="text-gray-500">+2</span>
                                </div>
                            </div>
                            <div class="flex items-center justify-end space-x-2 mt-2">
                                <button class="text-gray-500 hover:text-gray-700">
                                    <i class="fas fa-eye"></i>
                                </button>
                                <button class="text-gray-500 hover:text-gray-700">
                                    <i class="fas fa-trash"></i>
                                </button>
                                <button class="text-gray-500 hover:text-gray-700">
                                    <i class="fas fa-edit"></i>
                                </button>
                            </div>
                        </div>
                        `;
                        Completed.empty().append(data);
                        break;
                    case "Overdue":
                        data = `
                        <div class="flex items-center justify-between mb-2">
                            <span class="px-3 py-2 text-sm text-white bg-red-500 rounded"
                                >${element.priority}</span
                            >
                            <span class="px-3 py-2 text-sm text-gray-500 bg-gray-200 rounded"
                                >${element.due_date}</span
                            >
                            <span
                                class="px-3 py-2 text-sm text-purple-500 bg-purple-100 rounded"
                                >${element.category}</span
                            >
                        </div>
                        <div class="p-4 bg-gray-100 rounded-lg shadow">
                            <h3 class="font-semibold text-gray-800">${element.title}</h3>
                            <p class="text-gray-600 description-container">
                                ${element.description}
                            </p>
                            <div class="flex items-center justify-between mt-2">
                                <div class="flex items-center space-x-1">
                                    <span class="text-gray-500">0/3</span>
                                </div>
                                <div class="flex items-center space-x-1">
                                    <img
                                        class="w-6 h-6 rounded-full"
                                        src="https://via.placeholder.com/24"
                                        alt="avatar"
                                    />
                                    <img
                                        class="w-6 h-6 rounded-full"
                                        src="https://via.placeholder.com/24"
                                        alt="avatar"
                                    />
                                    <img
                                        class="w-6 h-6 rounded-full"
                                        src="https://via.placeholder.com/24"
                                        alt="avatar"
                                    />
                                    <span class="text-gray-500">+2</span>
                                </div>
                            </div>
                            <div class="flex items-center justify-end space-x-2 mt-2">
                                <button class="text-gray-500 hover:text-gray-700">
                                    <i class="fas fa-eye"></i>
                                </button>
                                <button class="text-gray-500 hover:text-gray-700">
                                    <i class="fas fa-trash"></i>
                                </button>
                                <button class="text-gray-500 hover:text-gray-700">
                                    <i class="fas fa-edit"></i>
                                </button>
                            </div>
                        </div>
                        `;
                        Overdue.empty().append(data);
                        break;
                    default:
                        break;
                }
            });
        },
        error: () => {
            console.log("An error occurred at the client side :(");
        },
    });
};
// 
$(document).ready(function () {
    /* The code is using jQuery to add a specific set of classes to all input, textarea,
    and select elements on the page. These classes are used for styling purposes, such as setting
    padding, background color, text color, border, focus outline, and border radius. */
    let classes =
        "px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg";
    $("input").addClass(classes);
    $("textarea").addClass(classes);
    $("select").addClass(classes);
    getTasks(`GET`, `/api/get-tasks/`);
    // setInterval(() => getTasks(`GET`, `/api/get-tasks/`), 2000);
});