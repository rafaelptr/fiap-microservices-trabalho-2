package br.com.fiap.microservices.clientes.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;


@Data
@Entity
@Table(name="clientes")
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @JsonProperty("nome_cliente")   
    private String nome;

    @JsonProperty("email_cliente") 
    private String email;

    @JsonProperty("cpfcnpj_cliente") 
    private String cpfCnpj;
}