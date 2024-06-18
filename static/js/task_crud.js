//
const getTasks = (method, url_path) => {
    $.ajax({
        type: method,
        url: url_path,
        success: (response) => {
            console.log(response);
            let p_data = "";
            let c_data = "";
            let o_data = "";
            var InProgress = $("#task-progress-container");
            var Completed = $("#task-completed-container");
            var Overdue = $("#task-overdue-container");
            InProgress.empty();
            Completed.empty();
            Overdue.empty();
            response.forEach((element) => {
                switch (element.status) {
                    case "In Progress":
                        p_data += `
							<div class="flex items-center justify-between mb-2" id="container-${element.id}">
								<span class="px-3 py-2 text-sm text-white bg-${element.color}-500 rounded"
									>${element.priority}</span
								>
								<span class="px-3 py-2 text-sm text-gray-500 bg-gray-200 rounded"
									><i class="fas fa-clock"></i> ${element.due_date}</span
								>
								<span
									class="px-3 py-2 text-sm text-${element.color}-500 bg-purple-100 rounded"
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
									<button class="text-gray-500 hover:text-gray-700 delete-task" data-id="${element.id}">
										<i class="fas fa-trash"></i>
									</button>
									<button class="text-gray-500 hover:text-gray-700 edit" data-id="${element.id}">
										<i class="fas fa-edit"></i>
									</button>
								</div>
							</div>
							`;
                        InProgress.empty().append(p_data);
                        console.log(InProgress.length);
                        break;
                    case "Completed":
                        c_data += `
								<div class="flex items-center justify-between mb-2" id="container-${element.id}">
									<span class="px-3 py-2 text-sm text-white bg-${element.color}-500 rounded"
										>${element.priority}</span
									>
									<span class="px-3 py-2 text-sm text-gray-500 bg-gray-200 rounded"
										><i class="fas fa-clock"></i> ${element.due_date}</span
									>
									<span
										class="px-3 py-2 text-sm text-${element.color}-500 bg-purple-100 rounded"
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
									<button class="text-gray-500 hover:text-gray-700 delete-task" data-id="${element.id}">
										<i class="fas fa-trash"></i>
									</button>
									<button class="text-gray-500 hover:text-gray-700 edit" data-id="${element.id}">
										<i class="fas fa-edit"></i>
									</button>
								</div>
							</div>
							`;
                        Completed.empty().append(c_data);
                        break;
                    case "Overdue":
                        o_data += `
							<div class="flex items-center justify-between mb-2" id="container-${element.id}">
								<span class="px-3 py-2 text-sm text-white bg-${element.color}-500 rounded"
									>${element.priority}</span
								>
								<span class="px-3 py-2 text-sm text-gray-500 bg-gray-200 rounded"
									><i class="fas fa-clock"></i> ${element.due_date}</span
								>
								<span
									class="px-3 py-2 text-sm text-${element.color}-500 bg-purple-100 rounded"
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
									<button class="text-gray-500 hover:text-gray-700 delete-task" data-id="${element.id}">
										<i class="fas fa-trash"></i>
									</button>
									<button class="text-gray-500 hover:text-gray-700 edit" data-id="${element.id}">
										<i class="fas fa-edit"></i>
									</button>
								</div>
							</div>
							`;
                        Overdue.empty().append(o_data);
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
$(document).ready(function () {
    let classes =
        "px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg";
    $("input").addClass(classes);
    $("textarea").addClass(classes);
    $("select").addClass(classes);
    getTasks(`GET`, `/api/get-tasks/`);
    // setInterval(() => getTasks(`GET`, `/api/get-tasks/`), 2000);
});
//
$(document).on("submit", "#task-form", (e) => {
    e.preventDefault();
    let formData = $("#task-form").serialize();
    $.ajax({
        type: "POST",
        url: "/api/create-task/",
        data: formData,
        success: (response) => {
            $("#alert-cont").removeClass("hidden").css("z-index", 2000);
            $("#success-mssg").empty().text(response);
            getTasks("GET", "/api/get-tasks/");
            setTimeout(() => {
                $("#success-mssg").empty();
                $("input").val("");
                $("textarea").val("");
                $("select").val("");
                $("#alert-cont").addClass("hidden").css("z-index", 0);
                $("#close-task-modal").click();
            }, 1500);
        },
        error: () => {
            console.warn("Client error!");
        },
    });
});
//
$(document).on("click", ".delete-task", function () {
    const taskId = $(this).data("id");
    const deleteBtn = $("#delete-button");
    const deleteModal = $("#delete-modal");
    deleteModal.removeClass("hidden");
    deleteBtn.attr("data-id", taskId);
});
//
$("#delete-button").click(function () {
    const taskId = $(this).data("id");
    $.ajax({
        type: "DELETE",
        url: `/api/delete-task/${taskId}/`,
        success: function (response) {
            alert("Task deleted successfully!");
            getTasks("GET", "/api/get-tasks/"); // Refresh the task list
        },
        error: function () {
            alert("Failed to delete the task. Please try again.");
        },
    });
});
//