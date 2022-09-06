package com.mytasks.server.Tasks;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TaskService {

    private final TaskRepository tr;

    public List<Task> getTasks(){
        List<Task> list =  tr.findAll();
        System.out.println(list);
        return list;
    }

    public void saveTask(Task tsk) {
        tr.insert(tsk);
    }

    public Optional<Task> getTaskFromId(String id) {
        return tr.findById(id);
    }

    public void deleteTask(String id) {
        tr.deleteById(id);
    }
}
