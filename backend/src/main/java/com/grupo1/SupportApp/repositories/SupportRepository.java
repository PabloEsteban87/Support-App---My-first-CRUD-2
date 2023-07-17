package com.grupo1.SupportApp.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.grupo1.SupportApp.models.Support;

@Repository
public interface SupportRepository extends JpaRepository<Support,Long> {
    
}
