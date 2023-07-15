package com.grupo1.SupportApp.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import com.grupo1.SupportApp.models.Support;

public interface SupportRepository extends JpaRepository<Support,Long> {
    
}
