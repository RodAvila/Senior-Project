package com.edugators.udl4cs_resources.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.Jws;
import java.util.Date;
import java.util.function.Function;
import org.springframework.stereotype.Service;

import java.security.Key;

@Service
public class JwtService {
    private static String SECRETKEY = "SeniorCIS";

    private Key getKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRETKEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    private Jws<Claims> parseToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getKey())
                .build()
                .parseClaimsJws(token);
    }

    private Claims extractClaims(String token) {
        return Jwts.parserBuilder().
                setSigningKey(getKey()).
                build().
                parseClaimsJwt(token).
                getBody();
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractClaims(token);
        return claimsResolver.apply(claims);
    }

    private boolean isTokenExpired(String token) {
        Date expiration = extractClaim(token, Claims::getExpiration);
        return expiration.before(new Date());
    }

    public int extractId(String token) {
        return Integer.parseInt(extractClaim(token, Claims::getId));
    }


    public boolean isValidToken(String token, int givenId) {
        try {
            Jws<Claims> jws = parseToken(token);
            int tokenId = Integer.parseInt(jws.getBody().getId());
            return !isTokenExpired(token) && tokenId == givenId;
        } catch (Exception e) {
            return false;
        }
    }
}
