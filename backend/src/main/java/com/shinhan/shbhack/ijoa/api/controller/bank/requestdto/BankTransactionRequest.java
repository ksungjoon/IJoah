package com.shinhan.shbhack.ijoa.api.controller.bank.requestdto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import static lombok.AccessLevel.PROTECTED;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = PROTECTED)
public class BankTransactionRequest {
    String accountNumber;

}
