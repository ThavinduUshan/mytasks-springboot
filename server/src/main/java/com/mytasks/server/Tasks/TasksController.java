package com.mytasks.server.Tasks;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/")
@AllArgsConstructor
public class TasksController {
    private final TaskService ts;

    @GetMapping
    public List<Task> ViewAllTask(){
        System.out.println("get..");
        return ts.getTasks();
    }

    @PostMapping("/new")
    public void SaveTask(@RequestBody Task tsk){
        System.out.println("Request is coming ...");
        ts.saveTask(tsk);
    }

//    @PostMapping("/task/update/${id}")
//    public Optional<Task> UpdateById(@RequestParam String id){
//        return ts.getTaskFromId(id);
//    }
//
//    @PostMapping("task/delete/{$id}")
//    public void deleteById(@RequestParam String id){
//        ts.deleteTask(id);
//    }
}
