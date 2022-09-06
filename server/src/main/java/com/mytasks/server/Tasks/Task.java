package com.mytasks.server.Tasks;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.Date;

@Data
@Document
public class Task {

    @Id
    private String id;
    private String tname;
    private  String tdescription;

    private String endDate;

    private String endTime;



    public Task(String tname, String tdescription, String endDate, String endTime) {
        this.tname = tname;
        this.tdescription = tdescription;
        this.endDate = endDate;
        this.endTime = endTime;

    }
}
