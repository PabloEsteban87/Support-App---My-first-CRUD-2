package com.grupo1.SupportApp.models;

import java.sql.Date;

import jakarta.persistence.*;

@Entity
@Table(name = "support")
public class Support {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) @Column(name = "id_support")
    private Long id;
    
    @Column(name = "name1")
    private String name;

    @Column(name = "date1")
    private Date date;

    @Column(name = "topic")
    private String topic;
 
    @Column(name = "description")
    private String description;

    
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }
    public String getTopic() {
        return topic;
    }
    public void setTopic(String topic) {
        this.topic = topic;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }






}