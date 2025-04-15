package com.example.banking.Model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity  //this class is a jpa entity it need to map to table
public class Transaction {
    @Id   //marks the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)  //for auto increment

    private Long id;
    private Double amount;
public Transaction(){

}
    public Transaction(Double amount, String type, LocalDateTime timestamp, User user) {
        this.amount = amount;
        this.type = type;
        this.timestamp = timestamp;
        this.user = user;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    private String type; // "DEPOSIT" or "WITHDRAW"
    private LocalDateTime timestamp;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    // ✅ All-args constructor (without ID)

    // Getters, Setters, Constructors
}

