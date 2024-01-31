package de.neuefische.team2.backend.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.ALWAYS))
                        .authorizeHttpRequests(a-> a
                                .requestMatchers(HttpMethod.POST,"/api/books/add").authenticated()
                                .requestMatchers(HttpMethod.POST,"/api/messages").authenticated()
                                .requestMatchers(HttpMethod.PUT,"/api/books/edit").authenticated()
                                .requestMatchers(HttpMethod.PUT,"/api/messages/:id").authenticated()
                                .anyRequest().permitAll()
                        )
                .exceptionHandling(e -> e
                .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED)))
                .oauth2Login(o -> {
                    try {
                        o.init(http);
                    } catch (Exception e) {
                        throw new RuntimeException(e);
                    }
                    o.defaultSuccessUrl("http://localhost:5173", true);
                });
                return http.build();
    }
}
