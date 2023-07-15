package com.grupo1.SupportApp.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.grupo1.SupportApp.models.Support;
import com.grupo1.SupportApp.services.SupportService;

@RestController
public class SupportController {
    


    private SupportService service;

    @Autowired
    public SupportController(SupportService service) {
        this.service = service;
    }

     @PostMapping
    public ResponseEntity<Support> create(@RequestBody Support support){
        Support serviceSaved = service.create(support);
        return ResponseEntity.status(HttpStatus.OK).body(serviceSaved);
    }

    @GetMapping(path = {"/{id}"})
    public ResponseEntity<Support> findOne(@PathVariable("id") Long id){
        Support findbyid = service.findById(id);
        return ResponseEntity.status(HttpStatus.OK).body(findbyid);
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<Support> update(@PathVariable("id") Long id, @RequestBody Support support1, @RequestBody Support newSupport){
        Support serviceupdated = service.update(id, support1, newSupport);
        return ResponseEntity.status(HttpStatus.OK).body(serviceupdated);
    }

    @DeleteMapping(path ={"/{id}"})
    public ResponseEntity<Support> delete(@PathVariable("id") Long id, @RequestBody Support support1) {
        Support serviceDeleted = service.delete(id, support1);
        return ResponseEntity.status(HttpStatus.OK).body(serviceDeleted);
    }

    @GetMapping
    public ResponseEntity<List<Support>>  findAll(){
        List<Support> serviceGetAll = service.getAll();
        return ResponseEntity.status(HttpStatus.OK).body(serviceGetAll);
    }
}
