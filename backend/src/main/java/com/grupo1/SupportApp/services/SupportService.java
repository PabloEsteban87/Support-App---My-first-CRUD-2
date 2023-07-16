package com.grupo1.SupportApp.services;

import com.grupo1.SupportApp.repositories.SupportRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grupo1.SupportApp.models.Support;

@Service
public class SupportService {


    SupportRepository repository;

    @Autowired
    public SupportService(SupportRepository repository) {
        this.repository = repository;
    }

       public Support create(Support support){
        Support supportSaved = repository.save(support);
        return supportSaved;
    }

    public Support findById(Long id) {
        Support supports =  repository.findById(id).orElseThrow();
        return supports;
    }

    public Support update(Long id, Support support1, Support newSupport){
        support1 = repository.findById(id).orElseThrow();
        newSupport.setName(support1.getName());
        newSupport.setDate(support1.getDate());
        newSupport.setTopic(support1.getTopic());
        newSupport.setDescription(support1.getDescription());
        return repository.save(newSupport);
    }
    
    public Support delete(Long id, Support support1){
        support1 = repository.findById(id).orElseThrow();
        repository.deleteById(support1.getId());
        return support1;
    }
    
    public List<Support> getAll() {
        List<Support> supports = repository.findAll();
        return supports;
    }

}
