package com.example.banking.Controller;

import com.example.banking.Model.Transaction;
import com.example.banking.Service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/api/accounts")
public class AccountController {
    @Autowired private AccountService accountService;

    @PostMapping("/deposit")
    public ResponseEntity<String> deposit(@RequestParam Long userId, @RequestParam Double amount) {
        accountService.deposit(userId, amount);
        return ResponseEntity.ok("Deposit successful");
    }

    @PostMapping("/withdraw")
    public ResponseEntity<String> withdraw(@RequestParam Long userId, @RequestParam Double amount) {
        accountService.withdraw(userId, amount);
        return ResponseEntity.ok("Withdrawal successful");
    }

    @GetMapping("/balance")
    public ResponseEntity<Double> balance(@RequestParam Long userId) {
        return ResponseEntity.ok(accountService.getBalance(userId));
    }

    @GetMapping("/name")
    public ResponseEntity<String> name(@RequestParam Long userId) {
        return ResponseEntity.ok(accountService.getName(userId));
    }

    @GetMapping("/transactions")
    public ResponseEntity<List<Transaction>> transactions() {
        return ResponseEntity.ok(accountService.getTransactions());
    }
}
