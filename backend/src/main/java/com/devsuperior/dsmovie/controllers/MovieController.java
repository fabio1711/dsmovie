package com.devsuperior.dsmovie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.services.MovieService;

@RestController
@RequestMapping(value = "/movies")
public class MovieController {
	
	@Autowired
	public MovieService service;
	
	@GetMapping
	public Page<MovieDTO> findALL(Pageable pegeable){
		return service.findALL(pegeable);
		
	}
	
	@GetMapping(value = "/{id}")
	public MovieDTO findByid(@PathVariable long id){
		return service.findALL(id);
		
	}

}
