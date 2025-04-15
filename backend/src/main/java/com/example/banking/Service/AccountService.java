package com.example.banking.Service;

import com.example.banking.Model.Transaction;
import com.example.banking.Model.User;
import com.example.banking.Repository.TransactionRepository;
import com.example.banking.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class AccountService {
    @Autowired
    private UserRepository userRepo;
    @Autowired
    private TransactionRepository txRepo;

    public void deposit(Long userId, Double amount) {
        User user = userRepo.findById(userId).orElseThrow();
        user.setBalance(user.getBalance() + amount);
        userRepo.save(user);

        txRepo.save(new Transaction( amount, "DEPOSIT", LocalDateTime.now(), user));
    }

    public void withdraw(Long userId, Double amount) {
        User user = userRepo.findById(userId).orElseThrow();
        if (user.getBalance() < amount) throw new RuntimeException("Insufficient funds");
        user.setBalance(user.getBalance() - amount);
        userRepo.save(user);

        txRepo.save(new Transaction( amount, "WITHDRAW", LocalDateTime.now(), user));
    }

    public Double getBalance(Long userId) {
        return userRepo.findById(userId).orElseThrow().getBalance();
    }

    public List<Transaction> getTransactions() {
        return txRepo.findAll();
    }

    public String getName(Long userId) {
        return userRepo.findById(userId).orElseThrow().getName();
    }
}
