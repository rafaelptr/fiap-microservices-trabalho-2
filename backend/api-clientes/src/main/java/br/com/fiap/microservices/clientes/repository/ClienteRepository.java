package br.com.fiap.microservices.clientes.repository;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import br.com.fiap.microservices.clientes.models.Cliente;

import org.springframework.data.jpa.repository.JpaRepository;

@RepositoryRestResource(collectionResourceRel = "clientes", path = "clientes")
public interface ClienteRepository extends JpaRepository<Cliente, Long> { 
}