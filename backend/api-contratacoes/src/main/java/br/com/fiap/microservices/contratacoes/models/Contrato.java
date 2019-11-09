package br.com.fiap.microservices.contratacoes.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;


@Data
@Entity
@Table(name="contratos")
public class Contrato {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @JsonProperty("id_servico")   
    private long idServico;

    @JsonProperty("id_fornecedor")
    private long idFornecedor;
    
    @JsonProperty("id_cliente")
    private long idCliente;

    @JsonProperty("valor_contrato")
    private double valor;
}