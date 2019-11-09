package br.com.fiap.microservices.propostas.repository;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import br.com.fiap.microservices.propostas.models.Proposta;
import org.springframework.data.jpa.repository.JpaRepository;

@RepositoryRestResource(collectionResourceRel = "propostas", path = "propostas")
public interface PropostaRepository extends JpaRepository<Proposta, Long> { 
}