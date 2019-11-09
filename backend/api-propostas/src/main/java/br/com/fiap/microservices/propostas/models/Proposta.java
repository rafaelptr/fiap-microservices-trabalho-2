package br.com.fiap.microservices.propostas.models;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;


@Data
@Entity
@Table(name="propostas")
public class Proposta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @JsonProperty("id_cliente")   
    private String idCliente;

    @JsonProperty("nome_proposta")   
    private String nome;

    @JsonProperty("mensagem_proposta") 
    private String mensagem;

    @JsonProperty("data_proposta") 
    private LocalDateTime dataProposta;
    
    @JsonProperty("validade_proposta")
    private LocalDateTime validade;

    @JsonProperty("valor_proposta") 
    private double valor;
}