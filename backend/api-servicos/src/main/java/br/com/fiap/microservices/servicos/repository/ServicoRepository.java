package br.com.fiap.microservices.servicos.repository;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import br.com.fiap.microservices.servicos.models.Servico;

import org.springframework.data.jpa.repository.JpaRepository;

@RepositoryRestResource(collectionResourceRel = "servicos", path = "servicos")
public interface ServicoRepository extends JpaRepository<Servico, Long> { 
}