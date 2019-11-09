package br.com.fiap.microservices.contratacoes.repository;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import br.com.fiap.microservices.contratacoes.models.Contrato;
import org.springframework.data.jpa.repository.JpaRepository;

@RepositoryRestResource(collectionResourceRel = "servicos", path = "servicos")
public interface ContratacaoRepository extends JpaRepository<Contrato, Long> { 
}